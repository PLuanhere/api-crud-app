import React, { useEffect, useState } from 'react'
import { GET } from '../api/route';
import './UserTable.css'

function UserTable() {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [sortBy, setSortBy] = useState("id");
    const [order, setOrder] = useState("asc");
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setLoading(true);

        GET(page, limit, sortBy, order, searchTerm).then((data) => {
            if(page > 1) {
                setUsers((oldUsers) => [...oldUsers, ...data]);
                setFilteredUsers((oldUsers) => [...oldUsers, ...data]);
            } else {
                setUsers(data);
                setFilteredUsers(data);
            }

            setHasMore(data.length === limit);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, [page, limit, sortBy, order, searchTerm]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setPage(1);
    };

    const handleLimit = (e) => {
        setLimit(Number(e.target.value));
        setUsers([]);
        setFilteredUsers([]);
        setPage(1);
    };

    const handleSortBy = (e) => {
        setSortBy(e.target.value);
        setUsers([]);
        setFilteredUsers([]);
        setPage(1);
    };

    const handleOrder = (e) => {
        setOrder(e.target.value);
        setUsers([]);
        setFilteredUsers([]);
        setPage(1);
    };

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;

        if(
            scrollTop + clientHeight >= scrollHeight - 20 &&
            !loading &&
            hasMore
        ) {
            setLoading(true);
            setPage(page + 1);
        }
    };

    return (
        <div className='table-block'>
            <div className='title'>
                <h2>USER LIST</h2>
            </div>
            <div className='search'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Nhập thông tin cần tìm"/>
                <select value={sortBy} onChange={handleSortBy}>
                    <option value="id">Sort by Id</option>
                    <option value="name">Sort by Name</option>
                    <option value="email">Sort by Email</option>
                    <option value="createdAt">Sort by Created At</option>
                </select>
                <select value={order} onChange={handleOrder}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <div
                className='table-container virtual-scroll'
                onScroll={handleScroll}>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Desc</th>
                            <th>Address</th>
                            <th>Genre</th>
                            <th>Color</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Timezone</th>
                            <th>Building</th>
                            <th>Music</th>
                            <th>Password</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Street</th>
                            <th>State</th>
                            <th>Zipcode</th>
                            <th>Company</th>
                            <th>Dob</th>
                            <th>Fincode</th>
                            <th>Ip</th>
                            <th>Job</th>
                            <th>Jd</th>
                            <th>Typeofjob</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id} style={{ backgroundColor: user.color }}>
                                <td>{user.id}</td>
                                <td>
                                    <img src={user.avatar} alt={user.name} className="avt" />
                                </td>
                                <td className='name'>{user.name}</td>
                                <td>{user.desc}</td>
                                <td>{user.address}</td>
                                <td>{user.genre}</td>
                                <td>{user.color}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.timezone}</td>
                                <td>{user.building}</td>
                                <td>{user.music}</td>
                                <td>{user.password}</td>
                                <td>{user.city}</td>
                                <td>{user.country}</td>
                                <td>{user.street}</td>
                                <td>{user.state}</td>
                                <td>{user.zipcode}</td>
                                <td>{user.company}</td>
                                <td>{user.dob}</td>
                                <td>{user.fincode}</td>
                                <td>{user.ip}</td>
                                <td>{user.job}</td>
                                <td>{user.jd}</td>
                                <td>{user.typeofjob}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {loading && <p className='loading'>Loading...</p>}
            </div>
            {!hasMore && (
                <p className='end-data'>Đã tải hết {users.length} user</p>
            )}
        </div>
    )
}

export default UserTable
