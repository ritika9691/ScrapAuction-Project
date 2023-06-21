import { useEffect, useState } from 'react';
import axios from 'axios';
import {  _apiurlcategory, _apiurlsubcategory } from '../APIurls';

function AddSubCategory() {

    const [file, setFile] = useState()
    const [catSubName , setSubName] = useState();
    const [catList,setCatList]=useState([]);
    const [output , setOutput] = useState();
    const[cat,setcat]=useState();


   useEffect(()=>(
    axios.get(_apiurlcategory+"fetch").then((response)=>{
      // console.log(response.data);
      setCatList(response.data)
    })
   ),[])


    const handleChange=(event)=>{
      setFile(event.target.files[0])
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('catname', cat);
      formData.append('subcatname', catSubName);
      formData.append('caticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post( _apiurlsubcategory+"save", formData, config).then((response) => {
        setSubName("");
        setOutput("Category Added Successfully....");
      });
    }  

  return (
    <div>
    {/* About Start */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
<div class="col-lg-12">
<h2 class="mb-4">Add <span class="text-primary ">Sub Category</span></h2>
<font style={{"color":"blue"}} >{output}</font>
<form>
{/* <div class="col-md-12 mt-4 "> */}
          <label for="inputState" class="form-label">Category:</label> <br/>
          <select  value={cat} onChange={e => setcat(e.target.value)} class="form-select form-control selectBorder">
            <option selected>Choose Category</option>
                    {
                catList.map((row)=>(
                  <option>{row.catname}</option>
                ))
              }
          </select>
          

  <br/>
  <div class="form-group">
    <label for="catnm">Sub Category Name:</label>
    <input type="text" class="form-control" value={catSubName} onChange={e => setSubName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">Category Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-primary">Add Category</button>
</form>
<br/><br/><br/>
</div>
                
            </div>
        </div>
    </div>
    {/* About End */}
</div>

  );
}

export default AddSubCategory;
