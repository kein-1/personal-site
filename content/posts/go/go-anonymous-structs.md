---
title: "Anonymous Structs in Go"
date: 2025-01-18
summary: "Go Anoynmous Structs and its usage"
categories: ["Tech"]
tags: ["Go"]
slug: "anonymous-structs"
draft: false

showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true

---

Recently I came across Anonymous Structs in Go, which I found to be pretty useful for parsing payload from HTTP requests and for structs only used in the handler. So rather than making an entirely new named struct and storing it in a package or elsewhere to be used:

```go
type Person struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}
```

We can do this:
```go
anon := struct {
    Name string `json:"name"`
    Age  int `json:"age"`
}{}

```
Then, using the anonyomous struct, we can decode the JSON data coming from a http request:

```go
// anyonmous struct
anon := struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}{}

// use decoder; typically good for IO streams and shorter than JSON Unmarshal
err := json.NewDecoder(r.Body).Decode(&anon)
```

This is much better than using `map[string]any` since we have a strongly typed case and it is less verbose. Furthermore, using a typed struct allows us to access the field easily: `anon.Name`. 

In using a map, we'll have to do casting to access the underyling type: 

```go

func someFunc(w http.ResponseWriter, r *http.Request) {
    
    mapp := make(map[string]any)
    if err := json.NewDecoder(r.Body).Decode(&mapp); err != nil {
        log.Fatal("Error decoding")
    }

    str, ok := mapp["name"]
    if !ok {
        log.Fatal("key does not exist")
    }
    strName, ok := str.(string)
    if !ok {
        log.Fatal("This strName is not of type string")
    }
}
```
Using a `map[stirng]any` This seems to be a quick and easy method and applicable for certain scenarios, but seems like we need to pay the price later on



