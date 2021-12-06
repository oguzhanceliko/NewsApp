import React from 'react'
import {ScrollView,Image} from 'react-native'
import styles from './NewsBanner.style'
import news_banner_data from './news_banner_data.json'


const NewsBanner = ({News}) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                news_banner_data.map(bannerNews=> <Image style={styles.banner_image} source={{uri:News.imageUrl}}/>)
            }

        </ScrollView>
    )
}

export default NewsBanner
