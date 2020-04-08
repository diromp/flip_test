import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListContent } from '../style';
import { defautStore } from '../reducer';
class List extends PureComponent {
  componentWillMount = () => {
    const { dispatch } = this.props;
    dispatch(defautStore());
  };
  render() {
    const { listSearch } = this.props;
    return (
      <ListContent>
        {listSearch &&
          listSearch.map((item, index) => {
            return (
              <div key={item.id} className="item-card">
                <h3 className="bank">
                  {item.sender_bank}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  {item.beneficiary_bank}
                </h3>
                <span className="title">{item.beneficiary_name}</span>
                <span className="content">
                  {item.amount}
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  {item.completed_at}
                </span>
                <span className="status">{item.status}</span>
              </div>
            );
          })}
      </ListContent>
    );
  }
}

const mapStateToProps = ({ listTransaction }) => ({
  list: listTransaction.list,
  listSearch: listTransaction.listSearch,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(List);
