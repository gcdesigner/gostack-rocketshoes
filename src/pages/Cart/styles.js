import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    background: #fff;
    border-radius: 4px;

    button {
      background: #7159c1;
      border: 0;
      padding: 6px 10px;
      color: #fff;
      text-align: center;
      border-radius: 4px;
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;

    input {
      border: 1px solid #ddd;
      padding: 5px;
      border-radius: 4px;
      text-align: center;
      width: 50px;
    }
  }

  button {
    display: flex;
    align-items: center;
    border: 0;
    background: none;
  }
`;

export const Total = styled.div``;
