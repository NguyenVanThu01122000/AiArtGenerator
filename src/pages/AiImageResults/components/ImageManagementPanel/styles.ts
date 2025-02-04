import styled from "styled-components";

export const BoxOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .select-date {
    width: 200px;
    height: 36px;
    background-color: rgba(97, 243, 243, 0.2);
  }
`;

export const SelectImage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  Button {
    height: 35px;
    border: none;
    color: white;
  }
  .btn-select-all,
  .btn-select {
    width: 120px;
    background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
  }
  .btn-delete {
    background-color: red !important;
  }
  @media screen and (max-width: 768px) {
  }
`;

export const GroupButton = styled.div`
  display: flex;
  gap: 10px;
  .btn-cancel-all {
    background: linear-gradient(90deg, #f23061 -7.43%, #faa227);
    color: white;
  }
  @media screen and (max-width: 768px) {
  }
`;

export const ListPhoto = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: var(--text-color);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  @media screen and (max-width: 768px) {
    display: block;
    ${ListPhoto} {
      margin-bottom: 12px;
    }
    ${BoxOptions} {
      gap: 10px;
      .select-date {
        width: 150px;
        height: 35px;
      }
    }

    ${SelectImage} {
      gap: 5px;
      button {
        height: 35px;
        font-size: 11px;
      }
    }
  }
`;
