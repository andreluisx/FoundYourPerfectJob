import React, { useContext } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CardJob from "../components/CardJob";
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Context } from "../context/jobContext/Context";
import Loading from "../components/Loading";

export function History({ navigation }) {
  const { state, getAllResults } = useContext(Context);
  const { results, loading } = state;

  useFocusEffect(
    React.useCallback(() => {
      const startScreen = async () => {
        await getAllResults();
      };
      startScreen();
    }, [navigation])
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? <Loading visible={loading} /> : 
      <View>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('FirstQuestion')}>
          <Icon name="angle-left" size={18} color="black" />
          <Text style={styles.backText}>Inicio</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Histórico de Resultados</Text>
        <FlatList
          style={styles.listView}
          data={results}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <CardJob
              jobName={item.nome_profissao}
              jobDescription={item.descricao_breve}
              jobId={item._id}
              action={() => navigation.navigate('Result', { id: item._id })}
            />
          )}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
  },
  listView: {
    height:'100%',
    marginBottom: 70,
    width: '90%',
    alignSelf: 'center',
  },
  flatListContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 25,
  },
  backText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
