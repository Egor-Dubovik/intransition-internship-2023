import React, { FC, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { countryOptions } from '../../common/constant/inputData';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import './ToolBar.css';

const ToolBar: FC = () => {
  const [region, setRegion] = useState('en');
  const [errorCount, setErrorCount] = useState('0');
  const [seed, setSeed] = useState('0110');

  const handleRandom = () => {
    const randomNumber = generateRandomNumber();
    setSeed(String(randomNumber));
  };

  const handleSubmit = () => {};

  useEffect(() => {
    console.log(errorCount, region, seed);
  }, [errorCount, region, seed]);

  return (
    <div className="toolbar">
      <Form className="toolbar__form tool-form">
        <div className="tool-form__box">
          <Form.Group className="tool-form__group">
            <Form.Label>Region</Form.Label>
            <Form.Control
              as="select"
              defaultValue="en"
              onChange={(event) => setRegion(event.target.value)}
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
            <Button variant="outline-success" onClick={handleRandom}>
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
