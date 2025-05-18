import React from 'react'


const Table = () => {
    return (
        <div class="row">
            <div className="col-md-12">
                <h3 className="title-5 m-b-35">data table</h3>

                <div className="table-responsive table-responsive-data2">
                    <table className="table table-data2">
                        <thead>
                            <tr>
                                <th>
                                    <label className="au-checkbox">

                                        <span className="au-checkmark"></span>
                                    </label>
                                </th>
                                <th>name</th>
                                <th>email</th>
                                <th>description</th>
                                <th>date</th>
                                <th>status</th>
                                <th>price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tr-shadow">
                                <td>
                                    <label className="au-checkbox">

                                        <span className="au-checkmark"></span>
                                    </label>
                                </td>
                                <td>Lori Lynch</td>
                                <td>
                                    <span className="block-email">lori@example.com</span>
                                </td>
                                <td className="desc">Samsung S8 Black</td>
                                <td>2018-09-27 02:12</td>
                                <td>
                                    <span className="status--process">Processed</span>
                                </td>
                                <td>$679.00</td>
                                <td>
                                    <div className="table-data-feature">
                                        <button classNames="item" data-toggle="tooltip" data-placement="top" title="Send">
                                            <i className="zmdi zmdi-mail-send"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                            <i className="zmdi zmdi-edit"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                            <i className="zmdi zmdi-delete"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="More">
                                            <i className="zmdi zmdi-more"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="spacer"></tr>
                            <tr className="tr-shadow">
                                <td>
                                    <label className="au-checkbox">

                                        <span className="au-checkmark"></span>
                                    </label>
                                </td>
                                <td>Lori Lynch</td>
                                <td>
                                    <span className="block-email">john@example.com</span>
                                </td>
                                <td className="desc">iPhone X 64Gb Grey</td>
                                <td>2018-09-29 05:57</td>
                                <td>
                                    <span className="status--process">Processed</span>
                                </td>
                                <td>$999.00</td>
                                <td>
                                    <div className="table-data-feature">
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                            <i className="zmdi zmdi-mail-send"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                            <i className="zmdi zmdi-edit"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                            <i className="zmdi zmdi-delete"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="More">
                                            <i className="zmdi zmdi-more"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="spacer"></tr>
                            <tr className="tr-shadow">
                                <td>
                                    <label className="au-checkbox">

                                        <span className="au-checkmark"></span>
                                    </label>
                                </td>
                                <td>Lori Lynch</td>
                                <td>
                                    <span className="block-email">lyn@example.com</span>
                                </td>
                                <td className="desc">iPhone X 256Gb Black</td>
                                <td>2018-09-25 19:03</td>
                                <td>
                                    <span className="status--denied">Denied</span>
                                </td>
                                <td>$1199.00</td>
                                <td>
                                    <div className="table-data-feature">
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                            <i className="zmdi zmdi-mail-send"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                            <i className="zmdi zmdi-edit"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                            <i className="zmdi zmdi-delete"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="More">
                                            <i className="zmdi zmdi-more"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="spacer"></tr>
                            <tr className="tr-shadow">
                                <td>
                                    <label className="au-checkbox">

                                        <span className="au-checkmark"></span>
                                    </label>
                                </td>
                                <td>Lori Lynch</td>
                                <td>
                                    <span className="block-email">doe@example.com</span>
                                </td>
                                <td className="desc">Camera C430W 4k</td>
                                <td>2018-09-24 19:10</td>
                                <td>
                                    <span className="status--process">Processed</span>
                                </td>
                                <td>$699.00</td>
                                <td>
                                    <div className="table-data-feature">
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                            <i className="zmdi zmdi-mail-send"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                            <i className="zmdi zmdi-edit"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                            <i className="zmdi zmdi-delete"></i>
                                        </button>
                                        <button className="item" data-toggle="tooltip" data-placement="top" title="More">
                                            <i className="zmdi zmdi-more"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Table