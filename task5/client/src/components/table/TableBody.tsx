import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { addUsers, selectParams, selectUsers, setParams } from '../../reducers/randomUsersSlice';
import { getRandomUsers } from '../../services/RandomService';

const TableBody = () => {
  const params = useAppSelector(selectParams);
  const randomUsers = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const lastElement = useRef(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        console.log('div visibble');
        loadMoreData();
      }
    };
    observer.current = new IntersectionObserver(handleIntersect);
    if (lastElement.current) observer.current.observe(lastElement.current);
  }, [isLoading]);

  const loadMoreData = async () => {
    console.log(params.page);
    if (params.page >= 2) {
      setIsLoading(true);
      const nextPage = params.page + 1;
      const randomUsers = await getRandomUsers({ ...params, page: nextPage });
      dispatch(addUsers(randomUsers));
      dispatch(setParams({ ...params, page: nextPage }));
      setIsLoading(false);
    }
  };

  return (
    <>
      <tbody className="table__body">
        {randomUsers.map((user, index) => (
          <tr key={user.id}>
            <td className="table__field">{index + 1}</td>
            <td className="table__field">{user.id}</td>
            <td className="table__field">{user.fullName}</td>
            <td className="table__field">{user.address}</td>
            <td className="table__field">{user.phone}</td>
          </tr>
        ))}
        {<tr ref={lastElement} style={{ height: 20, width: '100%', backgroundColor: 'red' }}></tr>}
      </tbody>
    </>
  );
};

export default TableBody;
