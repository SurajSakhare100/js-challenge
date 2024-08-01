// Task 1: Simple Promise with then and catch
const simplePromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 1300, 45);
    setTimeout(reject, 2000, 49);
  });
  
  simplePromise
    .then((result) => {
      console.log("Task 1: on success");
      console.log(result);
    })
    .catch((err) => {
      console.log("Task 1: on fail");
      console.log(err);
    });
  
  // Task 2: Chained Promises
  const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
  
  fetchData
    .then((data) => {
      console.log("Task 2:", data); // "Data fetched"
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Processed data"), 1000);
      });
    })
    .then((processedData) => {
      console.log("Task 2:", processedData); // "Processed data"
    })
    .catch((error) => {
      console.error("Task 2:", error);
    });
  
  // Task 3: Promises with async/await
  const newpromise = new Promise((resolve, reject) => {
    return setTimeout(() => resolve("Data fetched"), 1000);
  });
  const newpromise2 = new Promise((resolve, reject) => {
    return setTimeout(() => reject("Data fetched"), 1000);
  });
  
  async function p1() {
    const data = await newpromise;
    console.log("Task 3:", data);
  }
  p1();
  
  async function p2() {
    try {
      const data = await newpromise2;
      console.log("Task 3:", data);
    } catch (error) {
      console.log("Task 3:", error);
    }
  }
  p2();
  
  // Task 4: Fetch Data with async/await
  const fetchSpells = async () => {
    const res = await fetch("https://potterapi-fedeperin.vercel.app/en/spells");
    const spells = await res.json();
    console.log("Task 4:", spells);
  };
  fetchSpells();
  
  // Task 5: Fetch Data with Promises
  const fetchSpellbypromise = () => {
    fetch("https://potterapi-fedeperin.vercel.app/en/spells")
      .then(res => res.json())
      .then(spells => {
        console.log("Task 5:", spells);
      })
      .catch(error => {
        console.error("Task 5: Error fetching spells:", error);
      });
  };
  fetchSpellbypromise();
  
  // Task 6: Promise.all example
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  
  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log("Task 6:", values); // [3, 42, 'foo']
  });
  
  // Task 7: Promise.race example
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise5, promise6]).then((value) => {
    console.log("Task 7:", value); // "two"
  });
  
  // Task 8: Promise.any example
  const fetchInvalidSpells = () => {
    return fetch("https://invalid-url.com")
      .then(res => res.json());
  };
  
  Promise.any([fetchInvalidSpells(), fetchSpells()])
    .then(result => {
      console.log("Task 8: First successful result:", result);
    })
    .catch(error => {
      console.error("Task 8: All promises were rejected:", error);
    });
  
  // Task 9: Promise.all with Fetch example
  const fetchSpell = () => fetch("https://potterapi-fedeperin.vercel.app/en/spells").then(res => res.json());
  const fetchHouses = () => fetch("https://potterapi-fedeperin.vercel.app/en/houses").then(res => res.json());
  
  Promise.all([fetchSpell(), fetchHouses()])
    .then(([spells, houses]) => {
      console.log("Task 9: Spells:", spells);
      console.log("Task 9: Houses:", houses);
    })
    .catch(error => {
      console.error("Task 9: Error fetching data:", error);
    });
  
  // Task 10: Promise.allSettled example
  const promiseA = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'A');
  });
  
  const promiseB = new Promise((resolve, reject) => {
    setTimeout(reject, 200, 'B');
  });
  
  const promiseC = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'C');
  });
  
  Promise.allSettled([promiseA, promiseB, promiseC])
    .then((results) => {
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Task 10: Promise ${index + 1} fulfilled with value:`, result.value);
        } else {
          console.log(`Task 10: Promise ${index + 1} rejected with reason:`, result.reason);
        }
      });
    });
  