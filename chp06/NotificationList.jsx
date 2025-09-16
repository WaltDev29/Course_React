import React from "react";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요!"
    },
    {
        id: 2,
        message: "오늘 비가 많이 내렸네요."
    },
    {
        id: 3,
        message: "우산 잘 챙기세요!"
    }
]

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        const {notifications} = this.state;
    }

    componentWillUnmount() {
    }

    render() {
        return (
          <div>

          </div>
        );
    }
}

export default NotificationList;