import React, { Component } from 'react';
import request from './../../utils/axios';
import { URL } from './../../config/end-points-url';
import { connect } from 'react-redux';
import './HistoryBet.css';
import {Tag,Table, Divider} from 'antd';


const columns = [
  {
    title: 'Time',
    dataIndex: 'bet_time',
    key: 'bet_time',
      },
      {
       title: 'Match ID',
       dataIndex:'match.match_id' 
      },
  {
    title: 'Bet Score',
    dataIndex: 'bet_content',
    key: 'bet_content',
  },
  {
    title: 'Bet Amount',
    dataIndex: 'bet_amount',
    key: 'amount',
  },
  { title: 'Bet status',
  dataIndex:'bet_status',
  key:'bet_status',
  render: bet_status => {
    
    let color = 'geekblue';
    if(bet_status ==='LOSE'){
      color='volcano';
    }
    return (
    <span>
          <Tag color={color} key={bet_status}>
            {bet_status.toUpperCase()}
          </Tag>
    </span>)
      }
    },
  {
    title:'Bet Gained',
    dataIndex:'bet_gain',
    key: 'bet_gain',
  },
  {
    title:'Bet Type',
    dataIndex:'bet_type',
    key:'bet_type',
  },
 
];




//const dataSource= [this.state.bet_history];
class HistoryBet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bet_history: [],
      visible:false,
          };
    
  }
  
   
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  
  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  componentDidMount = async () => {
    const response = await request.server.get(
      URL.GET_USER_BET_HISTORY(this.props.user.user.user_id)
    );
    this.setState({
      bet_history: response.data.bets,
    });
    
  };

  render() {
    
  //   const expandedRowRender = () =>{
  //     const columns = [
  //       {
  //         title:'Match Time',
  //         dataIndex:'match.match_time',
  //         key:'match_time',
  //       },
  //       { 
  //         title: 'League ID',
  //         dataIndex:'match.league_id',
  //         key:'league_id',
  //       },
  //       {
  //         title:'Away Team',
  //         dataIndex:'match.match_awayteam_name',
  //         key:'match_awayteam_name',
  //       },
  //       {
  //         title:'Halftime Score',
  //         dataIndex:'match.match_awayteam_halftime_score',
  //         key:'match_awayteam_halftime_score',
  //       },
  //       {
  //         title:'Final Score',
  //         dataIndex:'match.match_awayteam_score',
  //         key:'match_awayteam_score',
  //       },
  //       {
  //         title:'Home Team',
  //         dataIndex:'match.match_hometeam_name',
  //         key:'match_hometeam_name',
  //       },
  //       {
  //         title:'Halftime Score',
  //         dataIndex:'match.match_hometeam_halftime_score',
  //         key:'match_hometeam_halftime_score',
  //       },
  //       {
  //         title:'Final Score',
  //         dataIndex:'match.match_hometeam_score',
  //         key:'match_hometeam_score',
  //       },
  //       {
  //         title:'Yellow Card',
  //         dataIndex:'match.yellow_card',
  //         key:'yellow_card',
  //       },
  //     ];
  // const data =[];
  
       
  //     return <Table columns={columns} dataSource={this.state.bet_history} pagination={false} />;
  //   }
     var data =[];
     var obj;
  // for(let i=0;i<this.state.bet_history.length;i++)
  // {
  //   obj=JSON.parse(this.state.bet_history)[i];
  //   obj.description=obj.match;
  //   delete obj.match;
  // data.push(obj)
  // }

     return( <div><Table columns={columns}  dataSource={this.state.bet_history} /> 
     
     </div>
     )
     
      //  childrenColumnName = {['Match Time','League ID','Away Team','halftime Score','Final Score','Home Team','Halftime Score','Final Score','Yellow Card']}     /> ;
     /*<div className ="historyBet">{JSON.stringify(this.state.bet_history, null, '\t')}</div>*/
    
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryBet);
