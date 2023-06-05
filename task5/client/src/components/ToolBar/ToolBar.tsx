import React, { FC, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { countryOptions } from '../../common/constant/inputData';
import { selectUsers, setUsers } from '../../reducers/randomUsersSlice';
import { getRandomUsers } from '../../services/RandomService';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import './ToolBar.css';

const ToolBar: FC = () => {
  const [locale, setLocale] = useState('en');
  const [errorCount, setErrorCount] = useState('0');
  const [seed, setSeed] = useState('0110');
  const dispatch = useAppDispatch();

  const handleRandom = () => {
    const randomNumber = generateRandomNumber();
    setSeed(String(randomNumber));
  };

  const handleFetchUsers = async () => {
    const randomUsers = await getRandomUsers({ locale, seed, errorCount, page: 1 });
    console.log(randomUsers);
    dispatch(setUsers(randomUsers));
  };

  useEffect(() => {
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
              // disabled={isLoading}
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
                // disabled={isLoading}
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
              // disabled={isLoading}
              onChange={(event) => setErrorCount(event.target.value)}
            />
            <Form.Control
              type="number"
              min={0}
              max={1000}
              value={errorCount}
              // disabled={isLoading}
              onChange={(event) => setErrorCount(event.target.value)}
            />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default ToolBar;
