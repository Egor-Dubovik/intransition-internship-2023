import React, { FC, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAppDispatch } from '../../app/store/hooks';
import { IUserData } from '../../common/types/user';
import { setIsFirstFetch, setParams, setUsers } from '../../reducers/randomUsersSlice';
import { getRandomUsers } from '../../services/randomService';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import { countryOptions, INPUT_ERR, SLEDER_ERR } from '../../common/constant/inputData';
import { INITIAL_PROPS } from '../../common/constant/initialProps';
import './ToolBar.css';

const ToolBar: FC = () => {
  const [locale, setLocale] = useState<string>(INITIAL_PROPS.LOCALE);
  const [errorCount, setErrorCount] = useState<string>(INITIAL_PROPS.ERR_COUNT);
  const [seed, setSeed] = useState<string>(INITIAL_PROPS.SEED);
  const dispatch = useAppDispatch();

  const handleRandom = () => {
    const randomNumber = generateRandomNumber();
    setSeed(String(randomNumber));
  };

  const handleFetchUsers = async () => {
    dispatch(setIsFirstFetch(false));
    let allUsers: IUserData[] = [];
    for (let i = 1; i <= INITIAL_PROPS.PAGE; i++) {
      const randomUsers = await getRandomUsers({ locale, seed, errorCount, page: i });
      allUsers = allUsers.concat(randomUsers);
    }
    dispatch(setUsers(allUsers));
    dispatch(setIsFirstFetch(true));
  };

  useEffect(() => {
    dispatch(setParams({ page: INITIAL_PROPS.PAGE as number, locale, seed, errorCount }));
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
                min={Number(INITIAL_PROPS.SEED)}
                value={seed}
                onChange={(event) => setSeed(event.target.value)}
              />
            </div>
            <Button variant="outline-success" onClick={handleRandom}>
              Random
            </Button>
          </Form.Group>
        </div>
        <div className="tool-form__box">
          <Form.Group className="tool-form__group">
            <Form.Label>Error count</Form.Label>
            <Form.Range
              min={SLEDER_ERR.MIN}
              max={SLEDER_ERR.MAX}
              step={SLEDER_ERR.STEP}
              value={errorCount}
              onChange={(event) => setErrorCount(event.target.value)}
            />
            <Form.Control
              type="number"
              min={INPUT_ERR.MIN}
              max={INPUT_ERR.MAX}
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
