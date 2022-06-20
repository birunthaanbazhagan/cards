import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Input } from 'semantic-ui-react'

export default function search() {
    const [kanbanData, serkanbandata] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    // useEffect(() => {
    //     axios.get(``)
    //         .then((response) => {
    //             setAPIData(response.data);
    //         })
    // }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = kanbanData.filter((data) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(kanbanData)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{data.id}</Card.Header>
                                    <Card.Description>
                                        {data.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    kanbanData.map((data) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{data.id}</Card.Header>
                                    <Card.Description>
                                        {data.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
        </div>
    )
}