import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>
                    Are you sure you want to continue?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author ="Sam" 
                    timeAgo ="Today at 4:45PM" 
                    text="Nice blog post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author ="Alex"
                    timeAgo ="Today at 2:00PM" 
                    text="Coronavirus Quarantine!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author ="Jane"
                    timeAgo ="Today at 10:15AM" 
                    text="Learning ReactJS." 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));