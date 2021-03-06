import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    marginTop: 24
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 70
  },

  content: {
    paddingTop: 10,
  },
  
  label: {
    color: "#ddd",
    fontSize: 18,
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 5,
    fontFamily: "Poppins SemiBold"
  },

  input: {
    height: 50,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 20,
    alignSelf: "center",
    fontFamily: "Poppins Regular"
  },

  registerBtn: {
    flexDirection: "row",
    backgroundColor: "#27ae60",
    alignSelf: "center",
    marginTop: 30,
    width: "80%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 5
  },

  registerBtnTxt: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    width: "80%",
    fontFamily: "Archivo Bold"
  },

  backBtn: {
    marginTop: 20,
    marginLeft: 40,
    flexDirection: "row",
    alignItems: "center"
  },

  backBtnTxt: {
    fontSize: 18,
    color: "#fff",
    textDecorationStyle: "solid",
    textDecorationColor: "#fff",
    textDecorationLine: "underline",
    marginLeft: 5,
    fontFamily: "Poppins Regular"
  }
})
