import React, { useState, useEffect } from 'react';
import GitHub from 'github-api';
import { GraphQLClient, gql } from 'graphql-request';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const UserComponent = ({ username }) => {
    const [user, setUser] = useState(null);
    const [contributions, setContributions] = useState([]);
    const [error, setError] = useState(null);
    const [contributionsThisYear, setContributionsThisYear] = useState(0);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const gh = new GitHub();
                const user = gh.getUser(username);
                const { data } = await user.getProfile();
                setUser(data);
            } catch (err) {
                setError('User not found');
            }
        };

        const fetchContributions = async () => {
            const endpoint = 'https://api.github.com/graphql';
            const token = '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';
            const client = new GraphQLClient(endpoint, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            const query = gql`
                query($username: String!) {
                    user(login: $username) {
                        contributionsCollection {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        date
                                        contributionCount
                                    }
                                }
                            }
                        }
                    }
                }
            `;

            const variables = { username };

            try {
                const data = await client.request(query, variables);
                const weeks = data.user.contributionsCollection.contributionCalendar.weeks;
                const contributions = weeks.flatMap(week => week.contributionDays);
                setContributions(contributions);
                setContributionsThisYear(data.user.contributionsCollection.contributionCalendar.totalContributions);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUser();
        fetchContributions();
    }, [username]);

    const classForValue = value => {
        if (!value) {
            return 'color-empty';
        }
        return value.count > 0 ? 'color-active' : 'color-inactive';
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='heatmap w-full text-white flex flex-col gap-4 text-center relative'>
            <div className='gitbtn flex w-1/2 m-auto justify-evenly gap-4 items-center'>
                <h2>Contributions: {contributionsThisYear}</h2>
            </div>
            <CalendarHeatmap
                startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                endDate={new Date()}
                values={contributions.map(day => ({
                    date: day.date,
                    count: day.contributionCount,
                }))}
                classForValue={classForValue}
            />
        </div>
    );

};

export default UserComponent;
