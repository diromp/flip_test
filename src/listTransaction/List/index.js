import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListContent } from '../style';
import { defautStore } from '../reducer';
import Helper from '../../helper';
import Moment from 'react-moment';

Moment.globalLocal = true;
const helper = new Helper();
class List extends PureComponent {
  componentWillMount = () => {
    const { dispatch } = this.props;
    dispatch(defautStore());
  };
  render() {
    const { listSearch, loading } = this.props;
    return (
      <ListContent>
        {loading && <div className="loading">Loading....</div>}
        {!loading &&
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
                  {helper.checkFormatNominal(item.amount)}
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <Moment parse="YYYY-MM-DD HH:mm">{item.completed_at}</Moment>
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
  listSearch: listTransaction.listSearch,
  loading: listTransaction.loading,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(List);
