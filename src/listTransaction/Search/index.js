import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SearchInput } from '../style';
import { setInputSearch } from '../reducer';
class Search extends PureComponent {
  searchInput = (e) => {
    const { list, dispatch } = this.props;
    const data = list.filter(
      (el) => el.beneficiary_name.toLowerCase().indexOf(e.target.value) > -1
    );
    dispatch(setInputSearch(data));
  };

  render() {
    const { searchInput } = this;
    return (
      <SearchInput>
        <div className="form-group">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input placeholder="Cari Nama" onChange={searchInput} />
        </div>
      </SearchInput>
    );
  }
}

const mapStateToProps = ({ listTransaction }) => ({
  list: listTransaction.list,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Search);
