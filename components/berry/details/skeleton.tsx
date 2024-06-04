import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const BerryDetailsSkeleton = () => (
  <Card className="w-full max-w-sm">
    <CardContent className="flex flex-col items-center gap-4 p-6">
      <Skeleton className="h-24 w-24 rounded-full" />
      <div className="text-center space-y-1">
        <Skeleton className="h-5 w-24" />
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <Skeleton className="h-4 w-60" />
        <Skeleton className="h-4 w-64" />
      </div>
    </CardContent>
  </Card>
);
