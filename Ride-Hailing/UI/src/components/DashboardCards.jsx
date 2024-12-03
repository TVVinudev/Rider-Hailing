import React, { useEffect, useState } from 'react';

const DashboardCards = () => {
    const [users, setUsers] = useState([]);
    const [trip, setTrip] = useState([]);


    const fetchData = async () => {
        try {
            const resp = await fetch('/api/viewAllUsers', {
                headers: { 'Content-Type': 'application/json' },
            });

            if (resp.ok) {
                const data = await resp.json();
                setUsers(data.data); 
            } else {
                alert('Error fetching users. Check your backend.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('An error occurred while fetching users.');
        }
    };

    const fetchTrip = async () => {
        const resp = await fetch('/api/tripInitial/viewAll', {
            headers: { 'Content-Type': 'application/json' },
        });

        if (resp.ok) {
            const data = await resp.json();
            setTrip(data.data);
        }
    }

    useEffect(() => {
        fetchData();
        fetchTrip()
    }, [])


    const riderCount = users.filter((user) => user.role === 'rider').length;

    const cards = [
        { title: 'Users', count: users.length -1, color: 'text-lime-500' },
        { title: 'Riders', count: riderCount, color: 'text-red-500' },
        { title: 'Trips', count: trip.length, color: 'text-blue-500' }, 
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {cards.map((card) => (
                <div
                    key={card.title}
                    className="flex items-center justify-center h-24 rounded shadow-xl bg-white"
                >
                    <div className="text-center">
                        <h6 className="text-gray-400 text-sm">{card.title}</h6>
                        <span className={`text-[40px] font-bold ${card.color}`}>{card.count}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardCards;
