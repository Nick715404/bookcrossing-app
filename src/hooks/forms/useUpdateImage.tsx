import { useMutation, useQueryClient } from "react-query";
import { updateImage } from "../../api/server/image.query";
import { setSnackbar } from "../../store/activeModal";

type Props = {
  selectedImages: File[];
  bookId: string | undefined;
  imageId: string
}

const useUpdateImage = ({ bookId, imageId, selectedImages }: Props) => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['image', 'update'],
    mutationFn: async () => await updateImage(selectedImages, bookId, imageId),
    onSuccess() {
      setSnackbar('image-update');
      client.invalidateQueries({
        queryKey: [['books', 'all'], ['books', 'shelf'], ['image', 'single', bookId]]
      })
    },
  })
}

export { useUpdateImage };