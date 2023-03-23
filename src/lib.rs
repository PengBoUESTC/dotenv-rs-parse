
#![deny(clippy::all)]
extern crate dotenv_rs;

use std::collections::HashMap;

use napi_derive::napi;
use dotenv_rs::{get_vars_with_prefix, from_path_with_prefix, get_vars};

#[napi]
fn dot_parse_base(path: String, prefix: String) -> HashMap<String, Option<String>> {
  match get_vars_with_prefix(path.clone(), &prefix) {
    Ok(result) => return result,
    Err(_) => return HashMap::new(),
  }
}

#[napi]
fn get_env(path: String, prefix: String) {
  from_path_with_prefix(path.clone(), &prefix).ok();
}


#[napi]
fn dot_parse(path: String) -> HashMap<String, Option<String>>{
  match get_vars(path.clone()) {
      Ok(result) => return result,
      Err(_) => return HashMap::new(),
  }
}
