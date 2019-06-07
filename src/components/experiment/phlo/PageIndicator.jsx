import React, {Component} from 'react';


export default class PageIndicator extends React.Component {
    
    renderIndicators = () => {
      let count = this.props.pageCount;
      let indicators = [];
      
      for(let i = 0; i < count; i++) {
        indicators.push(
          <PageIndicatorButton 
            active={i === this.props.activePage} 
            pageIndex={i}
            goToPage={this.props.goToPage}
            key={i}
          />
        );
      }
      
      return indicators;
    }
    
    render() {
      let pageIndicatorStyle = {
        ...this.props.style,
        height: '100vh',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      };
      
      return(
        <div style={pageIndicatorStyle}>
          {this.renderIndicators()}
        </div>
      );
    }
  }

class PageIndicatorButton extends Component {
    goToPage = () => {
      this.props.goToPage(this.props.pageIndex);
    }
    
    render() {
      let indicatorStyle = {
        height: '8px',
        width: this.props.active ? '20px' : '8px',
        margin: '10px',
        borderRadius: '4px',
        backgroundColor: 'white',
        transition: 'width 500ms ease'
      };
      
      return(
        <div style={indicatorStyle} onClick={this.goToPage}>
        </div>
      );
    }
  }