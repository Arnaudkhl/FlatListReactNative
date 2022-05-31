import * as React from 'react';
import { StyleSheet,StatusBar,FlatList, Image, Animated,Text,View,Dimensions,TouchableOpacity} from 'react-native';
const{width,} = Dimensions.get('screen');
const data=[
 
  "https://images.hdqwalls.com/download/mask-guy-with-smoke-bomb-in-hand-4k-kc-1920x1080.jpg", 
  "https://images3.alphacoders.com/953/953699.jpg",
  "https://initiate.alphacoders.com/images/101/stretched-1920-1080-1015416.jpg?4873",
  "https://3.bp.blogspot.com/-och_CZCwI_U/Xu4iUpnrE9I/AAAAAAAAZ-w/UGQsRYcIFuY5CPRUpi-n2umrGPT1pZh0QCLcBGAsYHQ/w919/cyberpunk-girl-futuristic-oni-mask-uhdpaper.com-4K-4.3076-wp.thumbnail.jpg", 
  " https://initiate.alphacoders.com/images/109/stretched-1920-1080-1096450.jpg?992", 

];


const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <StatusBar hidden />
            <View
                style={StyleSheet.absoluteFillObject}
                    >
                        {data.map((image,index)=>{
                        const inputRange = [
                          (index - 1) * width,
                          index * width,
                          (index + 1) * width
                        ]
                          const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange:[0, 1 , 0]
                })
                    return <Animated.Image
                    key={`image-${index}`}
                    source={{uri:image}}
                    style={[
                      StyleSheet.absoluteFillObject,
                      {
                        opacity
                      }
                    ]}
                      blurRadius={15}
                />
              })}
            </View>
            <Animated.FlatList
                data={data}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}],
                  {useNativeDriver: true }
          )}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            renderItem={({item}) => {
              return <View style={{width,marginTop: '120px', alignItems:'center',
              
              }}>
                <Image source={{uri:item}} style ={{
                      width: imageW,
                      height: imageH,
                      resizeMode:'cover',
                      borderRadius:16
                }}
                
                />
                </View>
            }}
            />

            
        </View>
    );
};


