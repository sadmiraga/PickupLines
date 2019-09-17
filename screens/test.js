Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@sadmiraga 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


0
11sadmiraga/androidApp-centar-smijeha
 Code Issues 0 Pull requests 0 Projects 0 Wiki Security Insights Settings
androidApp-centar-smijeha/app/components/Ispis/SviVicevi.js
@sadmiraga sadmiraga Logo na vrhu sa ispisom svih vicevaa
9f627e0 on Jan 18
We found potential security vulnerabilities in your dependencies.
Only the owner of this repository can see this message.

66 lines (63 sloc)  1.72 KB
  
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
export default class Svivicevi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount() {
        return fetch('http://centarsmijeha.com/api/help')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            let data = this.state.dataSource.map((val, key) => {

                return <View key={key} style={styles.item}><Text>{val.jokeText}</Text></View>

            });
            return (
                <ScrollView>

                    {data}
                </ScrollView >
            );
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        marginTop: 50,
        marginRight: '15%',
        marginLeft: '15%',
        width: '70%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
});
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
