import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Row,Col} from 'react-bootstrap';
import ActionHome from 'material-ui/svg-icons/action/swap-vertical-circle';
import Games from 'material-ui/svg-icons/av/games';
import Up from 'material-ui/svg-icons/navigation/arrow-upward';
import Down from 'material-ui/svg-icons/navigation/arrow-downward';
export default class EachDrawRow extends React.Component{

   
    render(){
        
        // console.log(' i am in each'); 
        // console.log(this.props.data);
        return(
            <Card style={{marginTop:"10px"}}>
        <CardHeader
          title={this.props.data.name}
          subtitle={this.props.data.catagory}
          avatar={this.props.data.url}
          
        />
       
        
      </Card>
        )
    }
}