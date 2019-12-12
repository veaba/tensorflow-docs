将csv记录转换为张量。每列映射到一个张量。

```
 tf.compat.v1.decode_csv(
    records,
    record_defaults,
    field_delim=',',
    use_quote_delim=True,
    name=None,
    na_value='',
    select_cols=None
)
 
```

RFC 4180 format is expected for the CSV records.(https://tools.ietf.org/html/rfc4180)Note that we allow leading and trailing spaces with int or float field.

#### 参数：
- **`records`** : A  `Tensor`  of type  `string` .Each string is a record/row in the csv and all records should havethe same format.
- **`record_defaults`** : A list of  `Tensor`  objects with specific types.Acceptable types are  `float32` ,  `float64` ,  `int32` ,  `int64` ,  `string` .One tensor per column of the input record, with either ascalar default value for that column or an empty vector if the column isrequired.
- **`field_delim`** : An optional  `string` . Defaults to  `","` .char delimiter to separate fields in a record.
- **`use_quote_delim`** : An optional  `bool` . Defaults to  `True` .If false, treats double quotation marks as regularcharacters inside of the string fields (ignoring RFC 4180, Section 2,Bullet 5).
- **`name`** : A name for the operation (optional).
- **`na_value`** : Additional string to recognize as NA/NaN.
- **`select_cols`** : Optional sorted list of column indices to select. If specified,only this subset of columns will be parsed and returned.


#### 返回：
A list of  `Tensor`  objects. Has the same type as  `record_defaults` .Each tensor will have the same shape as records.

#### 加薪：
- **`ValueError`** : If any of the arguments is malformed.
