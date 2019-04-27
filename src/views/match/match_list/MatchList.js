import React, { Component } from 'react';
import { apifootballKey } from "../../../config/API-key";
import { Avatar, List, Card } from "antd";
import { Link } from 'react-router-dom';

const { Meta } = Card;

class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listMatch: [],
    }
  }


  async componentDidMount() {

    //leangue_id = 63 | 128
    const url = `https://apifootball.com/api/?action=get_events&from=2019-04-27&to=2019-05-01&APIkey=${apifootballKey}`;
    await fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          listMatch: data,
          isLoading: true,
        });
      });
    console.log(this.state.listMatch);

  }

  render() {
    return (
      <div>

        <List
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
          }}
          grid={{
            gutter: 32, md: 2, lg: 2
          }}
          dataSource={this.state.listMatch}
          renderItem={item => (
            <Link to= {{
                pathname: `/match/${item.match_id}`,
                state: {
                  match: item
                }
              }}>
              <List.Item style={{ background: "white" }}>
                <Card
                  hoverable
                  onClick={() => {
                    console.log("Hello Word");
                  }}
                >
                  <Meta
                    avatar={
                      <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />}
                    title={<a href="https://ant.design">

                      {item.league_name}<br></br>
                      {item.match_awayteam_name}  -   {item.match_hometeam_name}

                    </a>}
                    description={
                      <pre>
                        {JSON.stringify({
                          Id: item.match_id,
                          League_Id: item.league_id,
                          Match_Time: item.mtach_time,
                          Live: item.match_live,
                          // Goal_Scorer: item.goalscorer,
                        }
                          , null, '\t')}
                      </pre>
                    }
                  >
                    "Hihi"
                                </Meta>
                </Card>
                {/* <List.Item.Meta
                                avatar={
                                    <Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    />}
                                title={<a href="https://ant.design">
                                    {item.league_name}</a>}
                                description="Two - FootBall"
                            />
                            <pre>
                                {JSON.stringify({
                                    Id: item.match_id,
                                    League_Id: item.league_id,
                                    Match_Time: item.mtach_time,
                                    Live: item.match_live,
                                    Goal_Scorer: item.goalscorer,
                                }
                                    , null, '\t')}
                            </pre> */}
              </List.Item>
            </Link>
          )}
        >

        </List>
      </div>
    );
  }
}

export default MatchList;