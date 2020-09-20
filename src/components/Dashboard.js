import React from 'react';

const Dashboard = (props) => {
    return (
        <div>
          Dashboard {props.message} {props.name}
        </div>
    );
};

export default Dashboard;