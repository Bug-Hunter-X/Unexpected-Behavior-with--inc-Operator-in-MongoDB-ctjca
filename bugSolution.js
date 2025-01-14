```javascript
// Correct usage of $inc operator with error handling
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$inc":{"counter": -1}}, {upsert:true}).then(result => {
  if (result.modifiedCount === 0) {
    console.log("Counter cannot be decremented below zero.");
  }
});
```