import * as React from 'react';
import { Container, Footer, Text, Body } from 'native-base';
import { Dimensions, Image, StyleSheet, View, TouchableHighlight, ScrollView, StatusBar} from 'react-native';
import appStyle from '../styles/appStyle';

export default class GeneralInformationScreen extends React.Component {
    render() {
      return (
        <Container>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Body style={appStyle.blackbackground}>
          <ScrollView>
            <Text style={[appStyle.white, appStyle.headertext] }>General Information</Text>
            <Text style={[appStyle.white, appStyle.bodytext ]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                {'\n'}{'\n'}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </Text>
          </ScrollView>
          </Body>
        <Footer style={[  appStyle.blackbackground, appStyle.notopborder  ]} >
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Menu') }>
              <Image
                style={appStyle.footerlogo}
                source={require('../img/cma-circle-logo.png')}
                resizeMode = 'cover'
              />
          </TouchableHighlight>
        </Footer>
        </Container>
      );
    }
  }
