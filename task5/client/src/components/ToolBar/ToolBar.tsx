import React, { FC, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { countryOptions, INITIAL_PAGE } from '../../common/constant/inputData';
import { IUserData } from '../../common/types/user';
import { selectParams, setParams, setUsers } from '../../reducers/randomUsersSlice';
import { getRandomUsers } from '../../services/RandomService';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import './ToolBar.css';

const ToolBar: FC = () => {
  // const { page } = useAppSelector(selectParams);
  const [locale, setLocale] = useState('en');
  const [errorCount, setErrorCount] = useState('0');
  const [seed, setSeed] = useState('0110');
  const dispatch = useAppDispatch();

  const handleRandom = () => {
    const randomNumber = generateRandomNumber();
    setSeed(String(randomNumber));
  };

  const handleFetchUsers = async () => {
    let allUsers: IUserData[] = [];
    for (let i = 1; i <= 2; i++) {
      const randomUsers = await getRandomUsers({ locale, seed, errorCount, page: i });
      allUsers = allUsers.concat(randomUsers);
    }
    dispatch(setUsers(allUsers));
  };

  useEffect(() => {
    dispatch(setParams({ page: INITIAL_PAGE, locale, seed, errorCount }));
    handleFetchUsers();
  }, [errorCount, locale, seed]);

  return (
    <div className="toolbar">
      <Form className="toolbar__form tool-form">
        <div className="tool-form__box">
          <Form.Group className="tool-form__group">
            <Form.Label>Region</Form.Label>
            <Form.Control
              as="select"
              defaultValue="en"
              onChange={(event) => setLocale(event.target.value)}
            >
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="tool-form__group _seed">
            <div className="tool-form__item">
              <Form.Label>Seed</Form.Label>
              <Form.Control
                type="number"
                min={0}
                value={seed}
                onChange={(event) => setSeed(event.target.value)}
              />
            </div>
            <Button
              variant="outline-success"
              //  disabled={isLoading}
              onClick={handleRandom}
            >
              Random
            </Button>
          </Form.Group>
        </div>
        <div className="tool-form__box">
          <Form.Group className="tool-form__group">
            <Form.Label>Error count</Form.Label>
            <Form.Range
              min={0}
              max={10}
              step={0.25}
              value={errorCount}
              onChange={(event) => setErrorCount(event.target.value)}
            />
            <Form.Control
              type="number"
              min={0}
              max={1000}
              value={errorCount}
              onChange={(event) => setErrorCount(event.target.value)}
            />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default ToolBar;
