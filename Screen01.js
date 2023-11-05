import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Cá nấu lẩu, mì mini...',
    nameShop: 'Shop Devang',
    image: require("./assets/ca_nau_lau.png")
  },
  {
    id: '2',
    title: '1 KG khô gà bơ tỏi...',
    nameShop: 'LTD Food',
    image: require("./assets/ga_bo_toi.png")
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    nameShop: 'Thế giới đồ chơi',
    image: require("./assets/xa_can_cau.png")
  },
  {
    id: '4',
    title: 'Đồ chơi dụng cụ gia đình',
    nameShop: 'Thế giới đồ chơi',
    image: require("./assets/do_choi_dang_mo_hinh.png")
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    nameShop: 'Thế giới đồ chơi',
    image: require("./assets/lanh_dao_gian_don.png")
  },
  {
    id: '6',
    title: 'Hiếu lòng con trẻ',
    nameShop: 'Ming Long Book',
    image: require("./assets/hieu_long_con_tre.png")
  },
  
];


const App = () => {
  const renderItem = ({item}) => (
    <View style={{flexDirection:'row', flex:3, padding:5, borderTopWidth:1}}>
      <Image style={{flex: 2,width: "auto", height: 80, objectFit: "contain"}} source={item.image}></Image>
      <View style={{flex: 5, marginLeft: 10}}>
      <View style={styles.item}>
        <Text style={{fontWeight: "bold"}}>{item.title}</Text>
        <View style={{flexDirection: "row", alignItems: "flex-end"}}>
          <Text style={{fontSize:12}}>Shop:</Text>
          <Text style={{color:'red'}}>{item.nameShop}</Text>
        </View>
      </View>
      </View>
      
      <View style={{ flex: 1.8, padding:13}}>
          <TouchableOpacity style={{backgroundColor:'red', flex:1, justifyContent:'center', alignItems:'center'}}
            onPress={() => setCount(++count)}
          >
            <Text style={{ color: 'white'}}>Chat</Text>
          </TouchableOpacity>
        </View>
    </View>
  );

    const ListHeaderView = () => (
        <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%', 
        height: 45, 
        backgroundColor: '#1BA9FF', 
        justifyContent: 'center'}}> 
          <View style={{flex: 0.2}}></View>
          <Image style={{width: 20, height: 23}} source={require("./assets/Vector.png")}></Image>
          <View style={{flex: 1}}></View>
          <Text style={styles.textStyle}>
              Chat
          </Text>
          <View style={{flex: 1}}></View>
          <Image style={{width: 20, height: 23}} source={require("./assets/gioHang.png")}></Image>
          <View style={{flex: 0.2}}></View>
        </View>
      );
      const ListFooterView = () => (
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%', 
          height: 45, 
          backgroundColor: '#1BA9FF', 
          justifyContent: 'center'}}> 
          <View style={{flex: 0.2}}></View>
          <Image style={{width: 20, height: 23, color: "black", backgroundColor: "1BA9FF"}} source={require("./assets/menu1.png")}></Image>
          <View style={{flex: 1}}></View>
          <Image style={{width: 20, height: 23, color: "black"}} source={require("./assets/home2.png")}></Image>
          <View style={{flex: 1}}></View>
          <Image style={{width: 20, height: 23}} source={require("./assets/return-arrow.svg")}></Image>
          <View style={{flex: 0.2}}></View>
        </View>
      );
      
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        
        ListHeaderComponent={ListHeaderView}
        ListFooterComponent={ListFooterView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
    textStyle:{
        textAlign: 'center', 
        color: '#fff', 
        fontSize: 20
    }

});

export default App;