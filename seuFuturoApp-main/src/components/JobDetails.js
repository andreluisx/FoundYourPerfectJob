import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import MyButton from "./MyButton";

export default function JobDetails({ job, navigation }) {
  return (
    
        <View style={styles.container}>
        <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.content} 
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.boxImgContent}>
          <ImageBackground 
            style={[styles.box, styles.imageBackground]} 
            source={require("../images/areas_de_atuacao.png")}
          >
            <View style={styles.overlay}>
              <Text style={[styles.sectionHeader, styles.whiteText]}>Áreas de Atuação:</Text>
              {Array.isArray(job.areas_atuacao) && job.areas_atuacao.map((area, index) => (
                <Text key={index} style={[styles.listItem, styles.whiteText]}>{area}</Text>
              ))}
            </View>
          </ImageBackground>
        </View>
        <View style={styles.textBox}>
            <Text style={styles.sectionHeader}>📚 Como se Especializar</Text>
            <Text style={styles.bodyText}>{job.como_se_especializar}</Text>
        </View>
        <View style={styles.textBox}>
            <Text style={styles.sectionHeader}>🔥 Desafios da Profissão</Text>
            <Text style={styles.bodyText}>{job.desafios_da_profissao}</Text>
        </View>

        <ImageBackground 
            style={[styles.box, styles.imageBackground]} 
            source={require("../images/habilidades.png")}
          >
            <View style={styles.overlay}>
              <Text style={[styles.sectionHeader, styles.whiteText]}>Habilidades Necessárias:</Text>
              {Array.isArray(job.habilidades_necessarias) && job.habilidades_necessarias.map((habilidade, index) => (
                <Text key={index} style={[styles.listItem, styles.whiteText]}>{habilidade}</Text>
              ))}
            </View>
          </ImageBackground>

        <View style={styles.textBox}>
            <Text style={styles.sectionHeader}>💲 Média Salarial</Text>
            <Text style={styles.bodyText}>{job.media_salarial}</Text>
        </View>
        <View style={styles.textBox}>
            <Text style={styles.sectionHeader}>🕐 Tempo de Formação</Text>
            <Text style={styles.bodyText}>{job.tempo_formacao}</Text>
        </View>
        <View style={styles.buttons}>
          <MyButton content={'Ver todas as profissões'} action={()=>{navigation.navigate('History')}}/>
        </View>
        </ScrollView>
        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom:20,
    paddingHorizontal: 5,
    backgroundColor: '#f8f9fa',
    flex:1
  },
  content: {
    padding: 20,
    flexGrow: 1,
    
  },
  jobName: {
    textAlign:'center',
    fontSize: 33,
    fontWeight:'bold',
    paddingBottom:17
  },
  titleView: {
    flexDirection: "column",
    justifyContent: "center",
    borderBottomWidth:1,
   
    borderBottomColor:'#c6c6c7',
    width:'100%',
    borderRadius:50
  },
  jobDescription: {
    color: "#4c4c4c",
    fontSize: 16,
    marginBottom:30,
    textAlign:'center'
  },
  info: {
    flexDirection: "row",
    paddingBottom: 12,
    gap: 10,
  },
  infoView: {
    paddingTop: 10,
    justifyContent: "center",
    width: "80%",
  },
  iconView: {
    alignItems: "center",
    justifyContent: "center",
  },
  listItem:{
    textDecorationStyle:'double',
    marginBottom:10,
    fontWeight:'bold',
    color: "#605f5f",
  },
  overlay: {
    flex: 1,
    width:'100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
  },

  whiteText: {
    color: '#ffffff',
  },
  imageBackground: {
    overflow: 'hidden',
  },
  box: {
    flex: 1,
    borderWidth: 1,
    width: 350,
    resizeMode: 'cover',
   
    borderRadius: 20,
    backgroundColor: 'white',
    marginVertical: 15,
  },
  boxImgContent:{
    alignItems:'center',
    justifyContent:'center',
    
  },
  sectionHeader:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:15,
  },
  textBox:{
    marginVertical:15
  },
  bodyText:{
    color:'#605f5f'
  },
  scrollView: {
    flex: 1,
  },
  buttons:{
    alignItems:'center',
    marginTop:10,
  }
});
