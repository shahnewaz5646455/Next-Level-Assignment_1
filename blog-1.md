# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction
সহজ কথায় বলতে গেলে, **Generics** হলো TypeScript এর এমন একটি ম্যাজিক টুল যা দিয়ে আমরা এমন কোড লিখতে পারি যা বিভিন্ন ধরণের ডাটা (যেমন: string, number, object) এর সাথে কাজ করতে পারবে, কিন্তু কোডটির **Type Safety** বা নিরাপত্তা একদম বজায় থাকবে। 

সাধারণত আমরা যখন কোনো ফাংশন লিখি, তখন আমাদের বলে দিতে হয় সেটা কী ধরণের ডাটা নিয়ে কাজ করবে। কিন্তু Generics ব্যবহার করলে আমরা কোডটি লেখার সময় ডাটা টাইপ নির্দিষ্ট না করে একটি **Placeholder** (যেমন: `<T>`) ব্যবহার করি, যা পরে ব্যবহারের সময় নির্ধারিত হয়।

## কেন আমাদের Generics দরকার?
ধরুন, আপনার একটি ফাংশন দরকার যা ইনপুট হিসেবে যা পাবে তা-ই রিটার্ন করবে। আপনি যদি Generics ছাড়া এটি করতে চান, তবে আপনাকে হয়তো `any` ব্যবহার করতে হবে:

```typescript
function getAnything(data: any): any {
  return data;
}
```
কিন্তু `any` ব্যবহার করলে TypeScript আর বুঝতে পারে না ওই ডাটাটি আসলে কী। এতে টাইপ সেফটি নষ্ট হয় এবং বাগে পড়ার সম্ভাবনা থাকে। এখানেই Generics এর সমাধান।

## Generics কিভাবে কাজ করে?
নিচের উদাহরণটি দেখুন:

```typescript
function getData<T>(data: T): T {
  return data;
}

const userName = getData<string>("Samir");
const userAge = getData<number>(22);       
```

এখানে `<T>` হলো একটি টাইপ ভেরিয়েবল বা প্লেসহোল্ডার। যখন আমরা `getData<string>("Samir")` কল করি, তখন TypeScript বুঝে নেয় যে এইবারের জন্য `T` মানে হলো `string`। ফলে রিটার্ন ভ্যালুও `string` হিসেবেই থাকবে, যা আমাদের কোডকে নিরাপদ রাখে।

## Benefits of Generics
১. **Code Reusability**: একই ফাংশন বা ক্লাস দিয়ে আমরা ভিন্ন ভিন্ন টাইপের ডাটা হ্যান্ডেল করতে পারি। বারবার আলাদা কোড লিখতে হয় না।
২. **Strict Type Checking**: `any` এর মতো ডাটা টাইপ হারিয়ে যায় না। আপনি যদি ভুল করে `string` এর জায়গায় `number` পাঠিয়ে দেন, TypeScript সাথে সাথে আপনাকে ওয়ার্নিং দিবে।
৩. **Better Tooling Support**: কোড এডিটর আপনাকে সঠিক সাজেশন (IntelliSense) দিতে পারে কারণ সে জানে ডাটা টাইপ কী।

## Conclusion
পরিশেষে বলা যায়, বড় কোনো প্রজেক্টে যখন আমরা ক্লিন এবং স্কেলেবল কোড লিখতে চাই, তখন Generics এর কোনো বিকল্প নেই। এটি আমাদের কোড ডুপ্লিকেশন কমায় এবং টাইপ সেফটি বজায় রেখে কোডকে অনেক বেশি ফ্লেক্সিবল ও প্রফেশনাল করে তোলে।

