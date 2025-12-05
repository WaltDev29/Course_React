import React from "react";
import Notification from "./Notification";

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
var timer;
class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        const {notifications} = this.state;

        timer = setInterval(()=> {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index])
                this.setState({notifications : notifications})
            } else {
                this.setState({notifications : []})
                clearInterval(timer);
            }
        }, 2000)
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
          <div>
              {
                  this.state.notifications.map((notificantion) => {
                      return <Notification
                            key={notificantion.id}
                            id={notificantion.id}
                            message={notificantion.message}
                      />
                  })
              }
          </div>
        );
    }
}

export default NotificationList;