import React, {Component} from "react";
import "semantic-ui-css/semantic.min.css"
import { Divider, Grid, Header, Icon, Search, Segment , Button, Container, Placeholder, List} from "semantic-ui-react";

class App extends Component{
  render(){
    return(
      <div>
        <br></br>
        <Container>
        
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>
          <Grid.Row verticalAlign="middle">
          <Grid.Column>
              <Header icon>
                <Icon name="search"/>
                  Cari document
              </Header>
              <Search placeholder="Search document..."/>
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name='pdf file outline' />
                Tambah Document Baru
              </Header>
                <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted>
          <Grid columns={2}>
            <Grid.Column>
            <Placeholder inverted>
            <Placeholder.Paragraph>
              <Placeholder.Line/>
              <Placeholder.Line/>
              <Placeholder.Line/>
            </Placeholder.Paragraph>
          </Placeholder>
            </Grid.Column>
            <Grid.Column textAlign="center" width={1}>
              <Icon loading name="circle notched" size="large"/>
              <p>Loading</p>
            </Grid.Column>
          </Grid>
          
          
        </Segment>
        <Grid columns={3}>
          <Grid.Column width={6}>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
            <h3>Website Terkait</h3>
            <List>
              <List.Item icon="linkify" content={<a href="https://www.google.com" target="blank">Google</a>}  />
              <List.Item icon="linkify" content={<a href="https://www.facebook.com" target="blank" >Facebook</a>}/>
              <List.Item icon="linkify" content={<a href="https://semantic-ui.com/" target="blank">Semantic UI</a>}/>
              <List.Item icon="linkify" content={<a href="https://niomic.id/" target="blank">Niomic</a>}/>
              <List.Item icon="linkify" content={<a href="https://react.semantic-ui.com/usage" target="blank">React</a>}/>
            </List>
          </Grid.Column>
        </Grid>
        </Container>
        
      </div>
    );
  }
}

export default App;
