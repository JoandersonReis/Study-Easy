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
    alignItems: "center"
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

  daysBtnContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  dayBtn: {
    backgroundColor: "#fff",
    height: 60,
    width: 70,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1
  },

  dayBtnTxt: {
    fontSize: 15,
    color: "#999",
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

  selected: {
    backgroundColor: "#2ecc71",
    color: "#fff"
  }
})
