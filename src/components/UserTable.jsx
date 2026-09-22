import React, { useEffect, useState } from 'react'
import { GET } from '../api/route';
import './UserTable.css'

function UserTable() {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        GET().then((data) => {
            setUsers(data);
            setFilteredUsers(data);
        });
    }, []);

    useEffect(() => {
        const result = users.filter((user) =>
            String(user.id).includes(searchTerm)
        );

        setFilteredUsers(result);
    }, [searchTerm, users]);

    return (
        <div className='table-block'>
            <div className='title'>
                <h2>USER LIST</h2>
            </div>
            <div className='search'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nhập Id cần tìm"/>
            </div>
            <div className='table-container'>
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
            </div>
        </div>
    )
}

export default UserTable