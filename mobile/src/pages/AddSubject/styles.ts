import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    marginTop: 22
  },

  header: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    flexDirection: "row",
    paddingHorizontal: 5
  },

  backBtn: {
    marginTop: 20,
    marginLeft: 40,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10
  },

  backBtnTxt: {
    fontSize: 18,
    fontFamily: "Poppins SemiBold",
    color: "#fff",
    textDecorationStyle: "solid",
    textDecorationColor: "#fff",
    textDecorationLine: "underline",
    marginLeft: 5
  },

  content: {
    marginTop: 30,
  },

  title: {
    fontSize: 30,
    color: "#CC1478",
    alignSelf: "center",
    marginBottom: 30,
    fontFamily: "Archivo Bold",
  },
  
  label: {
    color: "#ddd",
    fontSize: 18,
    fontFamily: "Poppins SemiBold",
    marginLeft: 25,
    marginTop: 20,
    marginBottom: 5
  },

  input: {
    height: 50,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 20,
    alignSelf: "center",
    fontFamily: "Poppins Regular",
  },

  addBtn: {
    alignSelf: "center",
    backgroundColor: "#27ae60",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 50,
    marginTop: 30,
    borderRadius: 8,
  },

  addBtnTxt: {
    fontSize: 20,
    fontFamily: "Archivo Bold",
    color: "#fff"
  },
})
