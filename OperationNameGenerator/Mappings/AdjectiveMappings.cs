using OperationNameGenerator.BusinessModels;
using OperationNameGenerator.ViewModels;

namespace OperationNameGenerator.Mappings
{
    public static class AdjectiveMappings
    {
        public static AdjectiveDto ToAdjectiveDto (this Adjective adj)
        {
            return new AdjectiveDto
            {
                Id = adj.Id,
                Value = adj.Value
            };
        }

        public static AdjectiveReadDto ToAdjectiveReadDto (this Adjective adj)
        {
            return new AdjectiveReadDto
            {
                Value = adj.Value
            };
        }
    }
}
