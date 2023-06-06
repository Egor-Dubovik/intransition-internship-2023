import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useAppSelector } from '../app/store/hooks';
import { RECORDS_AMOUNT } from '../common/constant/inputData';
import { selectParams } from '../reducers/randomUsersSlice';
import { getScvFile } from '../services/randomService';

interface IAmountModal {
  show: boolean;
  close: () => void;
}

const CsvModal: FC<IAmountModal> = ({ show, close }) => {
  const params = useAppSelector(selectParams);
  const [amount, setAmount] = useState(RECORDS_AMOUNT.INIT);
  const [isFileRequest, setIsFileRequest] = useState(false);

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>): void => {
    let currentAmount = Number(event.target.value);
    if (currentAmount < RECORDS_AMOUNT.MIN) currentAmount = RECORDS_AMOUNT.MIN;
    setAmount(currentAmount);
  };

  const dowloadFile = async (): Promise<void> => {
    await getScvFile({ ...params, pageAmount: amount / 10 });
    close();
  };

  useEffect(() => {
    if (isFileRequest) dowloadFile();
  }, [isFileRequest]);

  useEffect(() => {
    setAmount(params.page * RECORDS_AMOUNT.MIN);
  }, [params.page]);

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Enter the amount of records to export</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Floating className="mb-3">
          <Form.Control
            id="amount"
            type="number"
            min={10}
            step={10}
            value={amount}
            onChange={handleChangeAmount}
            placeholder="amount"
          />
          <label htmlFor="amount">amount</label>
        </Form.Floating>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setIsFileRequest(true)}>
          Download
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CsvModal;
