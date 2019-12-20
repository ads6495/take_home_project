import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Data from '../take_home.json'

//styles
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const options = {
    sizePerPageList: [{
        text: '25', value: 25
    }, {
        text: '50', value: 50
    }, {
        text: '100', value: 100
    }]
}

const columns = [{
    dataField: 'id',
    text: 'Product ID',

}, {
    dataField: 'first_name',
    text: 'First Name',
    filter: textFilter()
}, {
    dataField: 'last_name',
    text: 'Last Name',
    filter: textFilter()
}, {
    dataField: 'email',
    text: 'Email',
    filter: textFilter()
}, {
    dataField: 'gender',
    text: 'Gender',
    filter: textFilter({ caseSensitive: true })
}, {
    dataField: 'dob',
    text: 'dob'
}, {
    dataField: 'Favorite_color',
    text: 'Fav Color',
    filter: textFilter()
}, {
    dataField: 'location',
    text: 'Location',
    filter: textFilter()
}];

export default () =>
    <BootstrapTable
        keyField='id'
        data={Data}
        columns={columns}
        filter={filterFactory()}
        pagination={paginationFactory(options)}
        cellEdit={cellEditFactory({ mode: 'dbclick' })} />