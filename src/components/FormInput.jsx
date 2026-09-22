import React, { useState } from 'react'
import './FormInput.css'

function FormInput() {

    const [input, setInput] = useState({});
    const [searchId, setSearchId] = useState("");

    const handleDelete = async () => {
        if (!searchId) {
            alert("Hãy nhập ID pls");
            return;
        }

        const res = await fetch(
            `https://671891927fc4c5ff8f49fcac.mockapi.io/v2/${searchId}`,
            {
                method: "DELETE"
            }
        );

        if (res.ok) {
            window.location.reload();
        } else {
            alert("ID not found or Failed");
        }
    };

    const handleSubmit = async (e) => {

        const createdAt = {
            ...input,
            createdAt: new Date()
        };

        const res = await fetch(
            "https://671891927fc4c5ff8f49fcac.mockapi.io/v2",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            });
        if (res.ok) {
            window.location.reload();
        }
    };

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div>
            <div className='input-container'>
                <form>
                    <div className='input'>
                        <label>Name</label>
                        <input
                            name="name"
                            value={input.name}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Description</label>
                        <input
                            name="desc"
                            value={input.desc}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Address</label>
                        <input
                            name="address"
                            value={input.address}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Genre</label>
                        <select
                            name="genre"
                            value={input.genre}
                            onChange={handleChange}>
                            <option value="">--</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                        </select>
                    </div>
                    <div className='input'>
                        <label>Color</label>
                        <input
                            type='color'
                            name="color"
                            value={input.color}
                            onChange={handleChange} />
                        <span className='color-text'>{input.color}</span>
                    </div>
                    <div className='input'>
                        <label>Email</label>
                        <input
                            name="email"
                            value={input.email}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Phone</label>
                        <input
                            name="phone"
                            value={input.phone}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Timezone</label>
                        <input
                            name="timezone"
                            value={input.timezone}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Building</label>
                        <input
                            name="building"
                            value={input.building}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Music</label>
                        <input
                            name="music"
                            value={input.music}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Password</label>
                        <input
                            type='password'
                            name="password"
                            value={input.password}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>City</label>
                        <input
                            name="city"
                            value={input.city}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Country</label>
                        <input
                            name="country"
                            value={input.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input'>
                        <label>Street</label>
                        <input
                            name="street"
                            value={input.street}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input'>
                        <label>State</label>
                        <input
                            name="state"
                            value={input.state}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Zipcode</label>
                        <input
                            name="zipcode"
                            value={input.zipcode}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Company</label>
                        <input
                            name="company"
                            value={input.company}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Dob</label>
                        <input
                            name="dob"
                            value={input.dob}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Fincode</label>
                        <input
                            name="fincode"
                            value={input.fincode}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Ip</label>
                        <input
                            name="ip"
                            value={input.ip}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Job</label>
                        <input
                            name="job"
                            value={input.job}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Jd</label>
                        <input
                            name="jd"
                            value={input.jd}
                            onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Type of job</label>
                        <input
                            name="typeofjob"
                            value={input.typeofjob}
                            onChange={handleChange} />
                    </div>

                </form>
                <div className='btn-group'>
                    <input
                        type="text"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        placeholder="Nhập ID cần XÓA" />
                </div>
                <div className='btn-group'>
                    <button
                        className='btn-add btn'
                        onClick={handleSubmit}>
                        Add</button>
                    <button
                        className="btn btn-delete"
                        onClick={handleDelete}>
                        Delete User by Id</button>
                </div>
            </div>
        </div>
    )
}

export default FormInput