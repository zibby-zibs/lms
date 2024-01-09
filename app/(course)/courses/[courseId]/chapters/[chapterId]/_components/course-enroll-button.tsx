"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formats";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  price: number;
  courseId: string;
};

const CourseEnrollButton = ({ price, courseId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/courses/${courseId}/checkout`);

      window.location.assign(response.data.url);
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button size="sm" className="w-full md:w-auto" onClick={onClick}>
      Enroll for {formatPrice(price)}
    </Button>
  );
};

export default CourseEnrollButton;
