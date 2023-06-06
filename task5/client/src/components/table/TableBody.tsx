import React, { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { getRandomUsers } from '../../services/randomService';
import { useObserver } from '../../hooks/useObserver';
import {
  addUsers,
  selectIsFirstFetch,
  selectParams,
  selectUsers,
  setParams,
} from '../../reducers/randomUsersSlice';

const TableBody: FC = () => {
  const params = useAppSelector(selectParams);
  const randomUsers = useAppSelector(selectUsers);
  const isFirstFetch = useAppSelector(selectIsFirstFetch);
  const dispatch = useAppDispatch();
  const lastElement = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const addPage = (): void => {
    if (isFirstFetch) {
      const nextPage = params.page + 1;
      dispatch(setParams({ ...params, page: nextPage }));
    }
  };

  const loadMoreData = async (): Promise<void> => {
    if (isFirstFetch) {
      setIsLoading(true);
      const randomUsers = await getRandomUsers({ ...params });
      dispatch(addUsers(randomUsers));
      setIsLoading(false);
    }
  };

  useObserver(lastElement, isLoading, addPage, [isLoading, isFirstFetch, randomUsers]);
  useEffect(() => {
    loadMoreData();
  }, [params.page]);

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
