"use client";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const formSchema = z.object({
  product_name: z.string().min(1),
  price_of_product: z.string().min(1),
  category: z.string(),
  description: z.string(),
  image: z.string(),
});

export default function ProductForm1() {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-85 rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>,
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <Field>
          <FieldLabel htmlFor="product name">Product name</FieldLabel>
          <Input
            id="product name"
            placeholder="product name"
            {...form.register("product_name")}
          />
          <FieldDescription>This is public product name.</FieldDescription>
          <FieldError>{form.formState.errors.product_name?.message}</FieldError>
        </Field>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <Field>
              <FieldLabel htmlFor="price_of_product">Price</FieldLabel>
              <Input
                id="price_of_product"
                placeholder="... USD"
                {...form.register("price_of_product")}
              />
              <FieldDescription>This is price of product.</FieldDescription>
              <FieldError>
                {form.formState.errors.price_of_product?.message}
              </FieldError>
            </Field>
          </div>

          <div className="col-span-6">
            <Field>
              <FieldLabel htmlFor="category">Category</FieldLabel>
              <Select {...form.register("category")}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <FieldDescription>Category of product</FieldDescription>
              <FieldError>{form.formState.errors.category?.message}</FieldError>
            </Field>
          </div>
        </div>
        <Field>
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <Textarea
            id="description"
            placeholder="Input description"
            {...form.register("description")}
          />
          <FieldDescription>This is description of product.</FieldDescription>
          <FieldError>{form.formState.errors.description?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="image">Input image</FieldLabel>
          <Input
            id="image"
            placeholder="Select a file to upload."
            {...form.register("image")}
          />
          <FieldDescription>Select a file to upload.</FieldDescription>
          <FieldError>{form.formState.errors.image?.message}</FieldError>
        </Field>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
