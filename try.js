function a() {
  console.log("123")
  n();
  console.log(34)
} 

function n() {
  console.log("n");
  return 1;
}
a();