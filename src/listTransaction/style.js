import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 10px;
`;

export const SearchInput = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  .form-group {
    display: flex;
    .fa {
      color: #bdbdbd;
      font-size: 14px;
      line-height: 28px;
    }
    input {
      outline: 0px;
      border: 0px;
      padding: 10px;
      width: 100%;
      display: block;
    }
  }
`;

export const ListContent = styled.div`
  .item-card {
    border-radius: 5px;
    border-left: 5px solid #56b585;
    background: #fff;
    position: relative;
    padding: 10px;
    margin-bottom: 10px;
    .bank {
      font-size: 14px;
      color: #000;
      margin-bottom: 5px;
      margin-top: 5px;
      .fa {
        font-size: 14px;
      }
    }
    .title {
      font-size: 14px;
      font-weight: 400;
      display: block;
      margin-bottom: 5px;
    }
    .content {
      font-size: 14px;
      font-weight: 400;
      display: block;
      margin-bottom: 5px;
    }
    .status {
      color: #fff;
      font-size: 13px;
      background: #56b585;
      border-radius: 5px;
      padding: 5px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
`;
