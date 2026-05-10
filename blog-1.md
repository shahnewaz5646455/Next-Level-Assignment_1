# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction
Generics হলো TypeScript এর একটি powerful feature যা reusable function, class, বা component তৈরি করতে সাহায্য করে। এর সবচেয়ে বড় সুবিধা হলো, একই code বিভিন্ন ধরনের data এর জন্য ব্যবহার করা যায় কিন্তু type safety ঠিক থাকে। ফলে code আরও flexible, reusable এবং safer হয়।

Example: 

```typescript

function getData<T>(data: T): T {
  return data;
}
const name = getData<string>("Samir");
const age = getData<number>(22);
console.log(name);
console.log(age);

```

এখানে <T> হলো  Generic Type  যা এখন  নিতে string পারে,number নিতে পারে,boolean নিতে পারে,object বা array ও নিতে পারে |
## Benefits of Generics
এটার সবচেয়ে বড় সুবিধা হলো:
 1. একই code বারবার লিখতে হয় না
 2. code reusable হয়
 3. ভুল type pass করলে error দেখায়

## Conclusion
Generics আমাদের এমন reusable function, class, বা component তৈরি করতে সাহায্য করে যেগুলো বিভিন্ন ধরনের data নিয়ে কাজ করতে পারে, কিন্তু type safety ঠিক থাকে। এর ফলে code duplication কমে, code আরও flexible ও reusable হয়, এবং ভুল type ব্যবহারের সম্ভাবনাও কমে যায়। তাই বড় project এ clean, scalable এবং safer code লেখার জন্য Generics খুবই গুরুত্বপূর্ণ।

