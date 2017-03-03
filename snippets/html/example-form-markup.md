---
title: 插入一个表单
---

```
<form id="myForm" action="#" method="post">
  <div>
    <label for="name">姓名:</label>
    <input type="text" name="name" id="name" value="" tabindex="1">
   </div>
   <div>
     <h4>单项选择</h4>
     <label for="radio-choice-1">选项1</label>
     <input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1">
    <label for="radio-choice-2">选项2</label>
    <input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2">
  </div>
  <div>
    <label for="select-choice">下拉选择:</label>
    <select name="select-choice" id="select-choice">
      <option value="选项1">选项1</option>
      <option value="选项2">选项2</option>
      <option value="选项3">选项3</option>
    </select>
  </div>
  <div>
    <label for="textarea">文本域:</label>
    <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
  </div>
  <div>
    <label for="checkbox">Checkbox:</label>
    <input type="checkbox" name="checkbox">
  </div>
  <div>
    <input type="submit" value="Submit">
  </div>
</form>
```

<form id="myForm" action="#" method="post">

  <div>
    <label for="name">姓名:</label>
    <input type="text" name="name" id="name" value="" tabindex="1">
   </div>

   <div>
     <h4>单项选择</h4>

     <label for="radio-choice-1">选项1</label>
     <input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1">

    <label for="radio-choice-2">选项2</label>
    <input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2">
  </div>

  <div>
    <label for="select-choice">下拉选择:</label>
    <select name="select-choice" id="select-choice">
      <option value="选项1">选项1</option>
      <option value="选项2">选项2</option>
      <option value="选项3">选项3</option>
    </select>
  </div>

  <div>
    <label for="textarea">文本域:</label>
    <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
  </div>

  <div>
    <label for="checkbox">Checkbox:</label>
    <input type="checkbox" name="checkbox">
  </div>

  <div>
    <input type="submit" value="Submit">
  </div>

</form>